# `vaultSecretsIntegrationAws` Submodule <a name="`vaultSecretsIntegrationAws` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationAws <a name="VaultSecretsIntegrationAws" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws hcp_vault_secrets_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

vaultsecretsintegrationaws.NewVaultSecretsIntegrationAws(scope Construct, id *string, config VaultSecretsIntegrationAwsConfig) VaultSecretsIntegrationAws
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig">VaultSecretsIntegrationAwsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig">VaultSecretsIntegrationAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys">PutAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity">PutFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetAccessKeys">ResetAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetFederatedWorkloadIdentity">ResetFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessKeys` <a name="PutAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys"></a>

```go
func PutAccessKeys(value VaultSecretsIntegrationAwsAccessKeysA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a>

---

##### `PutFederatedWorkloadIdentity` <a name="PutFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity"></a>

```go
func PutFederatedWorkloadIdentity(value VaultSecretsIntegrationAwsFederatedWorkloadIdentityA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a>

---

##### `ResetAccessKeys` <a name="ResetAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetAccessKeys"></a>

```go
func ResetAccessKeys()
```

##### `ResetFederatedWorkloadIdentity` <a name="ResetFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetFederatedWorkloadIdentity"></a>

```go
func ResetFederatedWorkloadIdentity()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationAws resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

vaultsecretsintegrationaws.VaultSecretsIntegrationAws_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

vaultsecretsintegrationaws.VaultSecretsIntegrationAws_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

vaultsecretsintegrationaws.VaultSecretsIntegrationAws_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

vaultsecretsintegrationaws.VaultSecretsIntegrationAws_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecretsIntegrationAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecretsIntegrationAws to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecretsIntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeys">AccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference">VaultSecretsIntegrationAwsAccessKeysAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentity">FederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeysInput">AccessKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentityInput">FederatedWorkloadIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessKeys`<sup>Required</sup> <a name="AccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeys"></a>

```go
func AccessKeys() VaultSecretsIntegrationAwsAccessKeysAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference">VaultSecretsIntegrationAwsAccessKeysAOutputReference</a>

---

##### `FederatedWorkloadIdentity`<sup>Required</sup> <a name="FederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentity"></a>

```go
func FederatedWorkloadIdentity() VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `AccessKeysInput`<sup>Optional</sup> <a name="AccessKeysInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeysInput"></a>

```go
func AccessKeysInput() interface{}
```

- *Type:* interface{}

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="FederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentityInput"></a>

```go
func FederatedWorkloadIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAwsAccessKeysA <a name="VaultSecretsIntegrationAwsAccessKeysA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

&vaultsecretsintegrationaws.VaultSecretsIntegrationAwsAccessKeysA {
	AccessKeyId: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | Key ID used with the secret key to authenticate against the target AWS account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | Secret key used with the key ID to authenticate against the target AWS account. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#access_key_id VaultSecretsIntegrationAws#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#secret_access_key VaultSecretsIntegrationAws#secret_access_key}

---

### VaultSecretsIntegrationAwsConfig <a name="VaultSecretsIntegrationAwsConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

&vaultsecretsintegrationaws.VaultSecretsIntegrationAwsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capabilities: *[]*string,
	Name: *string,
	AccessKeys: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA,
	FederatedWorkloadIdentity: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.name">Name</a></code> | <code>*string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.accessKeys">AccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.federatedWorkloadIdentity">FederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#capabilities VaultSecretsIntegrationAws#capabilities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#name VaultSecretsIntegrationAws#name}

---

##### `AccessKeys`<sup>Optional</sup> <a name="AccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.accessKeys"></a>

```go
AccessKeys VaultSecretsIntegrationAwsAccessKeysA
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#access_keys VaultSecretsIntegrationAws#access_keys}

---

##### `FederatedWorkloadIdentity`<sup>Optional</sup> <a name="FederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.federatedWorkloadIdentity"></a>

```go
FederatedWorkloadIdentity VaultSecretsIntegrationAwsFederatedWorkloadIdentityA
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#federated_workload_identity VaultSecretsIntegrationAws#federated_workload_identity}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#project_id VaultSecretsIntegrationAws#project_id}

---

### VaultSecretsIntegrationAwsFederatedWorkloadIdentityA <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

&vaultsecretsintegrationaws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA {
	Audience: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.audience">Audience</a></code> | <code>*string</code> | Audience configured on the AWS IAM identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.roleArn">RoleArn</a></code> | <code>*string</code> | AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#audience VaultSecretsIntegrationAws#audience}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_secrets_integration_aws#role_arn VaultSecretsIntegrationAws#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAwsAccessKeysAOutputReference <a name="VaultSecretsIntegrationAwsAccessKeysAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

vaultsecretsintegrationaws.NewVaultSecretsIntegrationAwsAccessKeysAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsIntegrationAwsAccessKeysAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationaws"

vaultsecretsintegrationaws.NewVaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



