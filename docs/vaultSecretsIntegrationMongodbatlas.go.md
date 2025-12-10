# `vaultSecretsIntegrationMongodbatlas` Submodule <a name="`vaultSecretsIntegrationMongodbatlas` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationMongodbatlas <a name="VaultSecretsIntegrationMongodbatlas" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas hcp_vault_secrets_integration_mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

vaultsecretsintegrationmongodbatlas.NewVaultSecretsIntegrationMongodbatlas(scope Construct, id *string, config VaultSecretsIntegrationMongodbatlasConfig) VaultSecretsIntegrationMongodbatlas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig">VaultSecretsIntegrationMongodbatlasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig">VaultSecretsIntegrationMongodbatlasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails">PutStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetStaticCredentialDetails">ResetStaticCredentialDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStaticCredentialDetails` <a name="PutStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails"></a>

```go
func PutStaticCredentialDetails(value VaultSecretsIntegrationMongodbatlasStaticCredentialDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetStaticCredentialDetails` <a name="ResetStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetStaticCredentialDetails"></a>

```go
func ResetStaticCredentialDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationMongodbatlas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

vaultsecretsintegrationmongodbatlas.VaultSecretsIntegrationMongodbatlas_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

vaultsecretsintegrationmongodbatlas.VaultSecretsIntegrationMongodbatlas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

vaultsecretsintegrationmongodbatlas.VaultSecretsIntegrationMongodbatlas_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

vaultsecretsintegrationmongodbatlas.VaultSecretsIntegrationMongodbatlas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecretsIntegrationMongodbatlas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecretsIntegrationMongodbatlas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecretsIntegrationMongodbatlas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationMongodbatlas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetails">StaticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference">VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetailsInput">StaticCredentialDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `StaticCredentialDetails`<sup>Required</sup> <a name="StaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetails"></a>

```go
func StaticCredentialDetails() VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference">VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StaticCredentialDetailsInput`<sup>Optional</sup> <a name="StaticCredentialDetailsInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetailsInput"></a>

```go
func StaticCredentialDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationMongodbatlasConfig <a name="VaultSecretsIntegrationMongodbatlasConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

&vaultsecretsintegrationmongodbatlas.VaultSecretsIntegrationMongodbatlasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capabilities: *[]*string,
	Name: *string,
	ProjectId: *string,
	StaticCredentialDetails: github.com/cdktf/cdktf-provider-hcp-go/hcp/v10.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.name">Name</a></code> | <code>*string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.staticCredentialDetails">StaticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | MongoDB Atlas API key used to authenticate against the target project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas#capabilities VaultSecretsIntegrationMongodbatlas#capabilities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas#name VaultSecretsIntegrationMongodbatlas#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas#project_id VaultSecretsIntegrationMongodbatlas#project_id}

---

##### `StaticCredentialDetails`<sup>Optional</sup> <a name="StaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.staticCredentialDetails"></a>

```go
StaticCredentialDetails VaultSecretsIntegrationMongodbatlasStaticCredentialDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas#static_credential_details VaultSecretsIntegrationMongodbatlas#static_credential_details}

---

### VaultSecretsIntegrationMongodbatlasStaticCredentialDetails <a name="VaultSecretsIntegrationMongodbatlasStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

&vaultsecretsintegrationmongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails {
	ApiPrivateKey: *string,
	ApiPublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPrivateKey">ApiPrivateKey</a></code> | <code>*string</code> | Private key used alongside the public key to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPublicKey">ApiPublicKey</a></code> | <code>*string</code> | Public key used alongside the private key to authenticate against the target project. |

---

##### `ApiPrivateKey`<sup>Required</sup> <a name="ApiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPrivateKey"></a>

```go
ApiPrivateKey *string
```

- *Type:* *string

Private key used alongside the public key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas#api_private_key VaultSecretsIntegrationMongodbatlas#api_private_key}

---

##### `ApiPublicKey`<sup>Required</sup> <a name="ApiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPublicKey"></a>

```go
ApiPublicKey *string
```

- *Type:* *string

Public key used alongside the private key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_mongodbatlas#api_public_key VaultSecretsIntegrationMongodbatlas#api_public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference <a name="VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultsecretsintegrationmongodbatlas"

vaultsecretsintegrationmongodbatlas.NewVaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKeyInput">ApiPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKeyInput">ApiPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKey">ApiPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKey">ApiPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiPrivateKeyInput`<sup>Optional</sup> <a name="ApiPrivateKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKeyInput"></a>

```go
func ApiPrivateKeyInput() *string
```

- *Type:* *string

---

##### `ApiPublicKeyInput`<sup>Optional</sup> <a name="ApiPublicKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKeyInput"></a>

```go
func ApiPublicKeyInput() *string
```

- *Type:* *string

---

##### `ApiPrivateKey`<sup>Required</sup> <a name="ApiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKey"></a>

```go
func ApiPrivateKey() *string
```

- *Type:* *string

---

##### `ApiPublicKey`<sup>Required</sup> <a name="ApiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKey"></a>

```go
func ApiPublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



