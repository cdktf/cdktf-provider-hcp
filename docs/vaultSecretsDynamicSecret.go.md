# `vaultSecretsDynamicSecret` Submodule <a name="`vaultSecretsDynamicSecret` Submodule" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsDynamicSecret <a name="VaultSecretsDynamicSecret" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

vaultsecretsdynamicsecret.NewVaultSecretsDynamicSecret(scope Construct, id *string, config VaultSecretsDynamicSecretConfig) VaultSecretsDynamicSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig">VaultSecretsDynamicSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig">VaultSecretsDynamicSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putAwsAssumeRole">PutAwsAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putGcpImpersonateServiceAccount">PutGcpImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetAwsAssumeRole">ResetAwsAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetGcpImpersonateServiceAccount">ResetGcpImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsAssumeRole` <a name="PutAwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putAwsAssumeRole"></a>

```go
func PutAwsAssumeRole(value VaultSecretsDynamicSecretAwsAssumeRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putAwsAssumeRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a>

---

##### `PutGcpImpersonateServiceAccount` <a name="PutGcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putGcpImpersonateServiceAccount"></a>

```go
func PutGcpImpersonateServiceAccount(value VaultSecretsDynamicSecretGcpImpersonateServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putGcpImpersonateServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a>

---

##### `ResetAwsAssumeRole` <a name="ResetAwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetAwsAssumeRole"></a>

```go
func ResetAwsAssumeRole()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetGcpImpersonateServiceAccount` <a name="ResetGcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetGcpImpersonateServiceAccount"></a>

```go
func ResetGcpImpersonateServiceAccount()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

vaultsecretsdynamicsecret.VaultSecretsDynamicSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

vaultsecretsdynamicsecret.VaultSecretsDynamicSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

vaultsecretsdynamicsecret.VaultSecretsDynamicSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

vaultsecretsdynamicsecret.VaultSecretsDynamicSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecretsDynamicSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecretsDynamicSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsDynamicSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRole">AwsAssumeRole</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference">VaultSecretsDynamicSecretAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccount">GcpImpersonateServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference">VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appNameInput">AppNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRoleInput">AwsAssumeRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccountInput">GcpImpersonateServiceAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationNameInput">IntegrationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProviderInput">SecretProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtl">DefaultTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationName">IntegrationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProvider">SecretProvider</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAssumeRole`<sup>Required</sup> <a name="AwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRole"></a>

```go
func AwsAssumeRole() VaultSecretsDynamicSecretAwsAssumeRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference">VaultSecretsDynamicSecretAwsAssumeRoleOutputReference</a>

---

##### `GcpImpersonateServiceAccount`<sup>Required</sup> <a name="GcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccount"></a>

```go
func GcpImpersonateServiceAccount() VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference">VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appNameInput"></a>

```go
func AppNameInput() *string
```

- *Type:* *string

---

##### `AwsAssumeRoleInput`<sup>Optional</sup> <a name="AwsAssumeRoleInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRoleInput"></a>

```go
func AwsAssumeRoleInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *string
```

- *Type:* *string

---

##### `GcpImpersonateServiceAccountInput`<sup>Optional</sup> <a name="GcpImpersonateServiceAccountInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccountInput"></a>

```go
func GcpImpersonateServiceAccountInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationNameInput`<sup>Optional</sup> <a name="IntegrationNameInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationNameInput"></a>

```go
func IntegrationNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecretProviderInput`<sup>Optional</sup> <a name="SecretProviderInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProviderInput"></a>

```go
func SecretProviderInput() *string
```

- *Type:* *string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtl"></a>

```go
func DefaultTtl() *string
```

- *Type:* *string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationName"></a>

```go
func IntegrationName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SecretProvider`<sup>Required</sup> <a name="SecretProvider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProvider"></a>

```go
func SecretProvider() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsDynamicSecretAwsAssumeRole <a name="VaultSecretsDynamicSecretAwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

&vaultsecretsdynamicsecret.VaultSecretsDynamicSecretAwsAssumeRole {
	IamRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | AWS IAM role ARN to assume when generating credentials. |

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

AWS IAM role ARN to assume when generating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#iam_role_arn VaultSecretsDynamicSecret#iam_role_arn}

---

### VaultSecretsDynamicSecretConfig <a name="VaultSecretsDynamicSecretConfig" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

&vaultsecretsdynamicsecret.VaultSecretsDynamicSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppName: *string,
	IntegrationName: *string,
	Name: *string,
	SecretProvider: *string,
	AwsAssumeRole: github.com/cdktf/cdktf-provider-hcp-go/hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole,
	DefaultTtl: *string,
	GcpImpersonateServiceAccount: github.com/cdktf/cdktf-provider-hcp-go/hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.appName">AppName</a></code> | <code>*string</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.integrationName">IntegrationName</a></code> | <code>*string</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.name">Name</a></code> | <code>*string</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.secretProvider">SecretProvider</a></code> | <code>*string</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.awsAssumeRole">AwsAssumeRole</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a></code> | AWS configuration to generate dynamic credentials by assuming an IAM role. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.defaultTtl">DefaultTtl</a></code> | <code>*string</code> | TTL the generated credentials will be valid for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.gcpImpersonateServiceAccount">GcpImpersonateServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a></code> | GCP configuration to generate dynamic credentials by impersonating a service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.appName"></a>

```go
AppName *string
```

- *Type:* *string

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#app_name VaultSecretsDynamicSecret#app_name}

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.integrationName"></a>

```go
IntegrationName *string
```

- *Type:* *string

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#integration_name VaultSecretsDynamicSecret#integration_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#name VaultSecretsDynamicSecret#name}

---

##### `SecretProvider`<sup>Required</sup> <a name="SecretProvider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.secretProvider"></a>

```go
SecretProvider *string
```

- *Type:* *string

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#secret_provider VaultSecretsDynamicSecret#secret_provider}

---

##### `AwsAssumeRole`<sup>Optional</sup> <a name="AwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.awsAssumeRole"></a>

```go
AwsAssumeRole VaultSecretsDynamicSecretAwsAssumeRole
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a>

AWS configuration to generate dynamic credentials by assuming an IAM role. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#aws_assume_role VaultSecretsDynamicSecret#aws_assume_role}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.defaultTtl"></a>

```go
DefaultTtl *string
```

- *Type:* *string

TTL the generated credentials will be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#default_ttl VaultSecretsDynamicSecret#default_ttl}

---

##### `GcpImpersonateServiceAccount`<sup>Optional</sup> <a name="GcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.gcpImpersonateServiceAccount"></a>

```go
GcpImpersonateServiceAccount VaultSecretsDynamicSecretGcpImpersonateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a>

GCP configuration to generate dynamic credentials by impersonating a service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#gcp_impersonate_service_account VaultSecretsDynamicSecret#gcp_impersonate_service_account}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#project_id VaultSecretsDynamicSecret#project_id}

---

### VaultSecretsDynamicSecretGcpImpersonateServiceAccount <a name="VaultSecretsDynamicSecretGcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

&vaultsecretsdynamicsecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount {
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | GCP service account email to impersonate. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

GCP service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#service_account_email VaultSecretsDynamicSecret#service_account_email}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsDynamicSecretAwsAssumeRoleOutputReference <a name="VaultSecretsDynamicSecretAwsAssumeRoleOutputReference" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

vaultsecretsdynamicsecret.NewVaultSecretsDynamicSecretAwsAssumeRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsDynamicSecretAwsAssumeRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference <a name="VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsdynamicsecret"

vaultsecretsdynamicsecret.NewVaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



