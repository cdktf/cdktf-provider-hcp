# `vaultRadarSecretManagerVaultDedicated` Submodule <a name="`vaultRadarSecretManagerVaultDedicated` Submodule" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSecretManagerVaultDedicated <a name="VaultRadarSecretManagerVaultDedicated" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated hcp_vault_radar_secret_manager_vault_dedicated}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.NewVaultRadarSecretManagerVaultDedicated(scope Construct, id *string, config VaultRadarSecretManagerVaultDedicatedConfig) VaultRadarSecretManagerVaultDedicated
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig">VaultRadarSecretManagerVaultDedicatedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig">VaultRadarSecretManagerVaultDedicatedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush">PutApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken">PutToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite">ResetAccessReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush">ResetApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprolePush` <a name="PutApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush"></a>

```go
func PutApprolePush(value VaultRadarSecretManagerVaultDedicatedApprolePush)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes"></a>

```go
func PutKubernetes(value VaultRadarSecretManagerVaultDedicatedKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---

##### `PutToken` <a name="PutToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken"></a>

```go
func PutToken(value VaultRadarSecretManagerVaultDedicatedToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---

##### `ResetAccessReadWrite` <a name="ResetAccessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite"></a>

```go
func ResetAccessReadWrite()
```

##### `ResetApprolePush` <a name="ResetApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush"></a>

```go
func ResetApprolePush()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicated_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicated_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicated_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicated_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultRadarSecretManagerVaultDedicated to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultRadarSecretManagerVaultDedicated that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarSecretManagerVaultDedicated to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush">ApprolePush</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token">Token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput">AccessReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput">ApprolePushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput">KubernetesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput">TokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput">VaultUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite">AccessReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl">VaultUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprolePush`<sup>Required</sup> <a name="ApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush"></a>

```go
func ApprolePush() VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes"></a>

```go
func Kubernetes() VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token"></a>

```go
func Token() VaultRadarSecretManagerVaultDedicatedTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a>

---

##### `AccessReadWriteInput`<sup>Optional</sup> <a name="AccessReadWriteInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput"></a>

```go
func AccessReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `ApprolePushInput`<sup>Optional</sup> <a name="ApprolePushInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput"></a>

```go
func ApprolePushInput() interface{}
```

- *Type:* interface{}

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput"></a>

```go
func KubernetesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput"></a>

```go
func TokenInput() interface{}
```

- *Type:* interface{}

---

##### `VaultUrlInput`<sup>Optional</sup> <a name="VaultUrlInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput"></a>

```go
func VaultUrlInput() *string
```

- *Type:* *string

---

##### `AccessReadWrite`<sup>Required</sup> <a name="AccessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite"></a>

```go
func AccessReadWrite() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `VaultUrl`<sup>Required</sup> <a name="VaultUrl" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl"></a>

```go
func VaultUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePush <a name="VaultRadarSecretManagerVaultDedicatedApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

&vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicatedApprolePush {
	MountPath: *string,
	RoleIdEnvVar: *string,
	SecretIdEnvVar: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath">MountPath</a></code> | <code>*string</code> | Mount path of the AppRole auth method in Vault. Example 'approle'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar">RoleIdEnvVar</a></code> | <code>*string</code> | Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar">SecretIdEnvVar</a></code> | <code>*string</code> | Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Mount path of the AppRole auth method in Vault. Example 'approle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `RoleIdEnvVar`<sup>Required</sup> <a name="RoleIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar"></a>

```go
RoleIdEnvVar *string
```

- *Type:* *string

Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_id_env_var VaultRadarSecretManagerVaultDedicated#role_id_env_var}

---

##### `SecretIdEnvVar`<sup>Required</sup> <a name="SecretIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar"></a>

```go
SecretIdEnvVar *string
```

- *Type:* *string

Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#secret_id_env_var VaultRadarSecretManagerVaultDedicated#secret_id_env_var}

---

### VaultRadarSecretManagerVaultDedicatedConfig <a name="VaultRadarSecretManagerVaultDedicatedConfig" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

&vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicatedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VaultUrl: *string,
	AccessReadWrite: interface{},
	ApprolePush: github.com/cdktf/cdktf-provider-hcp-go/hcp/v10.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush,
	Kubernetes: github.com/cdktf/cdktf-provider-hcp-go/hcp/v10.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes,
	ProjectId: *string,
	Token: github.com/cdktf/cdktf-provider-hcp-go/hcp/v10.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl">VaultUrl</a></code> | <code>*string</code> | Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite">AccessReadWrite</a></code> | <code>interface{}</code> | Indicates if the auth method has read and write access to the secrets engine. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush">ApprolePush</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | Configuration for AppRole Push-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | Configuration for Kubernetes-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where Vault Radar is located. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token">Token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | Configuration for token-based authentication. Only one authentication method may be configured. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VaultUrl`<sup>Required</sup> <a name="VaultUrl" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl"></a>

```go
VaultUrl *string
```

- *Type:* *string

Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#vault_url VaultRadarSecretManagerVaultDedicated#vault_url}

---

##### `AccessReadWrite`<sup>Optional</sup> <a name="AccessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite"></a>

```go
AccessReadWrite interface{}
```

- *Type:* interface{}

Indicates if the auth method has read and write access to the secrets engine.

Defaults to false. Set this to true if you want to copy secrets to this secret manager as part of remediation process. (see https://developer.hashicorp.com/hcp/docs/vault-radar/remediate-secrets/copy-secrets)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#access_read_write VaultRadarSecretManagerVaultDedicated#access_read_write}

---

##### `ApprolePush`<sup>Optional</sup> <a name="ApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush"></a>

```go
ApprolePush VaultRadarSecretManagerVaultDedicatedApprolePush
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

Configuration for AppRole Push-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#approle_push VaultRadarSecretManagerVaultDedicated#approle_push}

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes"></a>

```go
Kubernetes VaultRadarSecretManagerVaultDedicatedKubernetes
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

Configuration for Kubernetes-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#kubernetes VaultRadarSecretManagerVaultDedicated#kubernetes}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#project_id VaultRadarSecretManagerVaultDedicated#project_id}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token"></a>

```go
Token VaultRadarSecretManagerVaultDedicatedToken
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

Configuration for token-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token VaultRadarSecretManagerVaultDedicated#token}

---

### VaultRadarSecretManagerVaultDedicatedKubernetes <a name="VaultRadarSecretManagerVaultDedicatedKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

&vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicatedKubernetes {
	MountPath: *string,
	RoleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath">MountPath</a></code> | <code>*string</code> | Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName">RoleName</a></code> | <code>*string</code> | Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_name VaultRadarSecretManagerVaultDedicated#role_name}

---

### VaultRadarSecretManagerVaultDedicatedToken <a name="VaultRadarSecretManagerVaultDedicatedToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

&vaultradarsecretmanagervaultdedicated.VaultRadarSecretManagerVaultDedicatedToken {
	TokenEnvVar: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar">TokenEnvVar</a></code> | <code>*string</code> | Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'. |

---

##### `TokenEnvVar`<sup>Required</sup> <a name="TokenEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar"></a>

```go
TokenEnvVar *string
```

- *Type:* *string

Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token_env_var VaultRadarSecretManagerVaultDedicated#token_env_var}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference <a name="VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.NewVaultRadarSecretManagerVaultDedicatedApprolePushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput">RoleIdEnvVarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput">SecretIdEnvVarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar">RoleIdEnvVar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar">SecretIdEnvVar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `RoleIdEnvVarInput`<sup>Optional</sup> <a name="RoleIdEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput"></a>

```go
func RoleIdEnvVarInput() *string
```

- *Type:* *string

---

##### `SecretIdEnvVarInput`<sup>Optional</sup> <a name="SecretIdEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput"></a>

```go
func SecretIdEnvVarInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `RoleIdEnvVar`<sup>Required</sup> <a name="RoleIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar"></a>

```go
func RoleIdEnvVar() *string
```

- *Type:* *string

---

##### `SecretIdEnvVar`<sup>Required</sup> <a name="SecretIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar"></a>

```go
func SecretIdEnvVar() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference <a name="VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.NewVaultRadarSecretManagerVaultDedicatedKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultRadarSecretManagerVaultDedicatedTokenOutputReference <a name="VaultRadarSecretManagerVaultDedicatedTokenOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarsecretmanagervaultdedicated"

vaultradarsecretmanagervaultdedicated.NewVaultRadarSecretManagerVaultDedicatedTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultRadarSecretManagerVaultDedicatedTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput">TokenEnvVarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar">TokenEnvVar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TokenEnvVarInput`<sup>Optional</sup> <a name="TokenEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput"></a>

```go
func TokenEnvVarInput() *string
```

- *Type:* *string

---

##### `TokenEnvVar`<sup>Required</sup> <a name="TokenEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar"></a>

```go
func TokenEnvVar() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



